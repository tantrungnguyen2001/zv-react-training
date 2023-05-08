export default function QuestionItem({index, q, a}) {
  return (
    <div>
      <p>Question {index}</p>
      <h1>{q}</h1>
      <p>{a}</p>
    </div>
  )
}