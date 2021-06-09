import ExpenseItem from './ExpenseItem'

const ExpenseNewComponent = ({expenses}) => {
  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    </div>
  )
}


export default ExpenseNewComponent
