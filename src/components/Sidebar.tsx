import { Lesson } from "./Lesson";
import { gql, useQuery } from "@apollo/client"
import {useGetLessonsQuery} from '../graphql/generated'



export function Sidebar() {
  const { data } = useGetLessonsQuery()

  console.log(data)
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lessons => {
          return (
            <Lesson
              key={lessons.id}
              title={lessons.title}
              slug={lessons.slug}
              availableAt={new Date(lessons.availableAt)}
              type={lessons.lessonType}
            />
          )
        })}

      </div>
    </aside>

  )
}