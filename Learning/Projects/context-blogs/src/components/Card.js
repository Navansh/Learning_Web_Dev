import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = ({post}) => {
  return (
    <div className=''>
        <NavLink to={`/blog/${post.id}`}>
            <p className=' font-bold text-lg '>{post.title}</p>
        </NavLink>
        <p className='text-sm mt-1'>
            By <span className=' italic'>{post.author}</span> on <span className=' underline font-bold'>
              <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                {post.category}
              </NavLink>
            </span>
        </p>
        <p className=' text-sm'>Posted on {post.date} </p>
        <p className=' mt-3'> {post.content} </p>
        <div className='sm:text-xs flex-wrap flex gap-x-1 text-blue-600 text-sm underline mt-2 '>
            {post.tags.map((tag,index) => (
                
                  <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span key={index}>{`#${tag}`}</span>
                  </NavLink>
               
            ))}
        </div>
    </div>
  )
}

export default Card