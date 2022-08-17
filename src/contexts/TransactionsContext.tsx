import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../lib/api'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  isLoading: boolean
  open: boolean
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  closedModal: (status: boolean) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    setIsLoading(true)

    try {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })

      const data = await response.data

      setIsLoading(false)
      setTransactions(data)
    } catch (err) {
      setIsLoading(false)
    }
  }

  function closedModal(status: boolean) {
    setOpen(status)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, category, price, type } = data

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        isLoading,
        createTransaction,
        open,
        closedModal,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
