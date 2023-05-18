import React from 'react'

const Card = ({post}) => {
  return (
    <div>
        <p className=' font-bold text-lg '>{post.title}</p>
        <p className='text-sm mt-1'>
            By <span className=' italic'>{post.author}</span> on <span className=' underline font-bold'>{post.category}</span>
        </p>
        <p className=' text-sm'>Posted on {post.date} </p>
        <p className=' mt-3'> {post.content} </p>
        <div className=' flex gap-x-1 text-blue-600 text-sm underline mt-2'>
            {post.tags.map((tag,index) => {
                return <span key={index}>{`#${tag}`}</span>
            })}
        </div>
    </div>
  )
}

export default Card