// Criando um hook

import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContex'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  // reduce percorre o array e reduz ele à uma nova estrutura de dados
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
