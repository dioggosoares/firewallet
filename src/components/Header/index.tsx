import { useContext, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo-firewallet.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Header() {
  const { open, closedModal } = useContext(TransactionsContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={open} onOpenChange={closedModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
