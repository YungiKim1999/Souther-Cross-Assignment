import React from 'react'
import MemberCard from './MemberCard'

export function MemberList({ members }) {
  return (
    <ul className="space-y-8">
    {members.map( member => {
      return < MemberCard key={member.id} member={member} />
    })}
    </ul>
  )
}
