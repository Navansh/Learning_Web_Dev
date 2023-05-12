import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Card = ({course,likedCourses,setLikedCourses}) => {

    // function myFunction() {
    //     console.log(likedCourses);
    //   }
    function clickHandler(){
        //logic
        //checking if the course is already liked 
        console.log(likedCourses);

        if(likedCourses.includes(course.id)){
            //hence this course is already liked, so we remove it from the likedCourses array
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Removed");            
        } else {
            //pehle se liked nhi hai
            //hence insert this course into the liked course array
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
                // let do = JSON.stringify(likedCourses);
                // localStorage.setItem("liked-course",JSON.stringify(likedCourses));
            } else {
                //this means ki pehle se courses hai array mein
                setLikedCourses((prev) => [...prev,course.id]);
                // localStorage.setItem("liked-course",JSON.stringify(likedCourses));
            }
            toast.success("Liked Successfully")
        }

        // setTimeout(myFunction, 3000);
        
    }

    useEffect(() => {
        localStorage.setItem("liked-course", JSON.stringify(likedCourses));
      }, [likedCourses]);


  return (
    <div className='w-[300px] bg-lime-200 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt="" />

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 flex justify-center items-center'>
                <button className='' onClick={clickHandler}>
                    {/* //which image will be displayed depends on the current liked state of the image, which can be checked through  */}
                    {/* searching the given sourse id in the Liked Courses array  */}
                    {
                        likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem" ></FcLikePlaceholder>
                    }
                    
                </button>
            </div>
            
        </div>
        
        <div className='p-4'>
            <p className='font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2'>{
                course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
            }</p>
        </div>
     </div>
    
  )
}

export default Card