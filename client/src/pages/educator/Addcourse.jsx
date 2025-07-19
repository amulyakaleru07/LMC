// import React, { useState, useRef, useEffect } from 'react'
// import uniqid from 'uniquid'
// import Quill from 'quill'
// import { assets } from '../../assets/assets'

// const Addcourse = () => {
//   const quillRef = useRef(null)
//   const editorRef = useRef(null)

//   const [courseTitle, setCourseTitle] = useState('')
//   const [coursePrice, setCoursePrice] = useState(0)
//   const [discount, setDiscount] = useState(0)
//   const [image, setImage] = useState(null)
//   const [chapters, setChapters] = useState([])
//   const [showPopup, setShowPopup] = useState(false)
//   const [currentChapterId, setCurrentChapterId] = useState(null)

//   const [lectureDetails, setLectureDetails] = useState({
//     lectureTitle: '',
//     lectureDuration: '',
//     lectureUrl: '',
//     isPreviewFree: false,
//   })

//   useEffect(() => {
//     if (!quillRef.current && editorRef.current) {
//       quillRef.current = new Quill(editorRef.current, {
//         theme: 'snow',
//       })
//     }
//   }, [])

//   const addChapter = () => {
//     const newChapter = {
//       id: uniqid(),
//       chapterTitle: `Chapter ${chapters.length + 1}`,
//       chapterContent: [],
//       collapsed: false,
//     }
//     setChapters([...chapters, newChapter])
//   }

//   const openLecturePopup = (chapterId) => {
//     setCurrentChapterId(chapterId)
//     setLectureDetails({
//       lectureTitle: '',
//       lectureDuration: '',
//       lectureUrl: '',
//       isPreviewFree: false,
//     })
//     setShowPopup(true)
//   }

//   const addLecture = () => {
//     const updated = chapters.map((chapter) => {
//       if (chapter.id === currentChapterId) {
//         return {
//           ...chapter,
//           chapterContent: [...chapter.chapterContent, { ...lectureDetails }],
//         }
//       }
//       return chapter
//     })
//     setChapters(updated)
//     setShowPopup(false)
//   }

//   const deleteChapter = (chapterId) => {
//     const updated = chapters.filter((chapter) => chapter.id !== chapterId)
//     setChapters(updated)
//   }

//   const deleteLecture = (chapterId, lectureIndex) => {
//     const updated = chapters.map((chapter) => {
//       if (chapter.id === chapterId) {
//         const newLectures = chapter.chapterContent.filter(
//           (_, index) => index !== lectureIndex
//         )
//         return { ...chapter, chapterContent: newLectures }
//       }
//       return chapter
//     })
//     setChapters(updated)
//   }

//   const submitCourse = (e) => {
//     e.preventDefault()
//     const description = quillRef.current.root.innerHTML

//     const payload = {
//       title: courseTitle,
//       price: coursePrice,
//       discount,
//       image,
//       description,
//       chapters,
//     }

//     console.log('Course submitted:', payload)
//     // TODO: Send to backend
//   }

//   return (
//     <div className='h-screen overflow-scroll flex flex-col items-start md:p-8 p-4 pt-8 w-full'>
//       <form onSubmit={submitCourse} className='w-full max-w-3xl space-y-4'>
//         {/* Title */}
//         <div className='flex flex-col gap-1 w-full'>
//           <p>Type here</p>
//           <input
//             onChange={(e) => setCourseTitle(e.target.value)}
//             value={courseTitle}
//             type='text'
//             placeholder='Type here'
//             className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500'
//             required
//           />
//         </div>

//         {/* Description */}
//         <div className='flex flex-col gap-1 w-full'>
//           <p>Course Description</p>
//           <div
//             ref={editorRef}
//             className='bg-white p-2 border border-gray-500 rounded min-h-[120px]'
//           />
//         </div>

//         {/* Price / Discount / Thumbnail */}
//         <div className='flex flex-wrap items-center gap-6 w-full'>
//           <div className='flex flex-col gap-1'>
//             <p>Course Price</p>
//             <input
//               onChange={(e) => setCoursePrice(e.target.value)}
//               value={coursePrice}
//               type='number'
//               placeholder='0'
//               className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
//               required
//             />
//           </div>

//           <div className='flex flex-col gap-1'>
//             <p>Discount %</p>
//             <input
//               onChange={(e) => setDiscount(e.target.value)}
//               value={discount}
//               type='number'
//               placeholder='0'
//               min={0}
//               max={100}
//               className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
//               required
//             />
//           </div>

//           <div className='flex md:flex-row flex-col items-center gap-3'>
//             <p>Course Thumbnail</p>
//             <label htmlFor='thumbnailImage' className='flex items-center gap-3 cursor-pointer'>
//               <img
//                 src={assets.file_upload_icon}
//                 alt=''
//                 className='p-3 bg-blue-500 rounded'
//               />
//               <input
//                 type='file'
//                 id='thumbnailImage'
//                 onChange={(e) => setImage(e.target.files[0])}
//                 accept='image/*'
//                 hidden
//               />
//               {image && (
//                 <img
//                   className='max-h-10 rounded'
//                   src={URL.createObjectURL(image)}
//                   alt='Thumbnail Preview'
//                 />
//               )}
//             </label>
//           </div>
//         </div>

//         {/* Add Chapter */}
//         <div
//           onClick={addChapter}
//           className='w-full text-center bg-blue-100 py-2 rounded cursor-pointer'
//         >
//           + Add Chapter
//         </div>

//         {/* List Chapters */}
//         {chapters.map((chapter, chapterIndex) => (
//           <div key={chapter.id} className='bg-white border rounded-lg mb-4'>
//             <div className='flex justify-between items-center p-4 border-b'>
//               <div className='flex items-center'>
//                 <img
//                   src={assets.dropdown_icon}
//                   width={14}
//                   alt=''
//                   className={`mr-2 cursor-pointer transition-all ${
//                     chapter.collapsed ? '-rotate-90' : ''
//                   }`}
//                   onClick={() => {
//                     const updated = chapters.map((c) =>
//                       c.id === chapter.id
//                         ? { ...c, collapsed: !c.collapsed }
//                         : c
//                     )
//                     setChapters(updated)
//                   }}
//                 />
//                 <span className='font-semibold'>
//                   {chapterIndex + 1}. {chapter.chapterTitle}
//                 </span>
//               </div>

//               <span className='text-gray-500'>
//                 {chapter.chapterContent.length} Lectures
//               </span>

//               <div className='flex items-center gap-3'>
//                 <button
//                   type='button'
//                   onClick={() => openLecturePopup(chapter.id)}
//                   className='bg-green-500 text-white px-2 py-1 rounded text-sm'
//                 >
//                   Add Lecture
//                 </button>
//                 <img
//                   src={assets.cross_icon}
//                   alt=''
//                   className='cursor-pointer w-4'
//                   onClick={() => deleteChapter(chapter.id)}
//                 />
//               </div>
//             </div>

//             {!chapter.collapsed && (
//               <div className='p-4 space-y-2'>
//                 {chapter.chapterContent.map((lecture, lectureIndex) => (
//                   <div
//                     key={lectureIndex}
//                     className='flex justify-between items-center mb-2'
//                   >
//                     <span>
//                       {lectureIndex + 1} {lecture.lectureTitle} - {lecture.lectureDuration} mins -{' '}
//                       <a href={lecture.lectureUrl} target="_blank" rel="noreferrer" className='text-blue-500'>Link</a> -{' '}
//                       {lecture.isPreviewFree ? 'Free Preview' : 'Paid'}
//                     </span>
//                     <img
//                       src={assets.cross_icon}
//                       alt=""
//                       className='cursor-pointer'
//                       onClick={() => deleteLecture(chapter.id, lectureIndex)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Submit */}
//         <button
//           type='submit'
//           className='bg-black text-white px-6 py-2 rounded'
//         >
//           ADD
//         </button>
//       </form>

//       {showPopup && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
//           <div className='bg-white p-6 rounded shadow w-96 space-y-4'>
//             <h3 className='text-lg font-semibold'>Add Lecture</h3>
//             <input
//               type='text'
//               placeholder='Lecture Title'
//               value={lectureDetails.lectureTitle}
//               onChange={(e) =>
//                 setLectureDetails({
//                   ...lectureDetails,
//                   lectureTitle: e.target.value,
//                 })
//               }
//               className='w-full p-2 border rounded'
//             />
//             <input
//               type='number'
//               placeholder='Duration (min)'
//               value={lectureDetails.lectureDuration}
//               onChange={(e) =>
//                 setLectureDetails({
//                   ...lectureDetails,
//                   lectureDuration: e.target.value,
//                 })
//               }
//               className='w-full p-2 border rounded'
//             />
//             <input
//               type='text'
//               placeholder='Video URL'
//               value={lectureDetails.lectureUrl}
//               onChange={(e) =>
//                 setLectureDetails({
//                   ...lectureDetails,
//                   lectureUrl: e.target.value,
//                 })
//               }
//               className='w-full p-2 border rounded'
//             />
//             <label className='flex items-center space-x-2'>
//               <input
//                 type='checkbox'
//                 checked={lectureDetails.isPreviewFree}
//                 onChange={(e) =>
//                   setLectureDetails({
//                     ...lectureDetails,
//                     isPreviewFree: e.target.checked,
//                   })
//                 }
//               />
//               <span>Free Preview</span>
//             </label>

//             <div className='flex justify-end gap-3'>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className='px-4 py-2 border rounded'
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={addLecture}
//                 className='px-4 py-2 bg-blue-500 text-white rounded'
//               >
//                 Add Lecture
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Addcourse
import React, { useState, useRef, useEffect } from 'react'
import uniqid from 'uniquid'
import Quill from 'quill'
import { assets } from '../../assets/assets'

const AddCourse = () => {
  const quillRef = useRef(null)
  const editorRef = useRef(null)

  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([])

  // Popup states
  const [showLecturePopup, setShowLecturePopup] = useState(false)
  const [showChapterPopup, setShowChapterPopup] = useState(false)

  const [currentChapterId, setCurrentChapterId] = useState(null)
  const [newChapterTitle, setNewChapterTitle] = useState('')

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  })

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  // Open chapter popup
  const openAddChapterPopup = () => {
    setNewChapterTitle('')
    setShowChapterPopup(true)
  }

  const addChapter = () => {
    if (!newChapterTitle.trim()) return
    const newChapter = {
      id: uniqid(),
      chapterTitle: newChapterTitle.trim(),
      chapterContent: [],
      collapsed: false,
    }
    setChapters([...chapters, newChapter])
    setShowChapterPopup(false)
  }

  const openLecturePopup = (chapterId) => {
    setCurrentChapterId(chapterId)
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    })
    setShowLecturePopup(true)
  }

  const addLecture = () => {
    const updated = chapters.map((chapter) =>
      chapter.id === currentChapterId
        ? {
            ...chapter,
            chapterContent: [...chapter.chapterContent, { ...lectureDetails }],
          }
        : chapter
    )
    setChapters(updated)
    setShowLecturePopup(false)
  }

  const deleteChapter = (chapterId) => {
    setChapters(chapters.filter((chapter) => chapter.id !== chapterId))
  }

  const deleteLecture = (chapterId, lectureIndex) => {
    const updated = chapters.map((chapter) =>
      chapter.id === chapterId
        ? {
            ...chapter,
            chapterContent: chapter.chapterContent.filter(
              (_, index) => index !== lectureIndex
            ),
          }
        : chapter
    )
    setChapters(updated)
  }

  const submitCourse = (e) => {
    e.preventDefault()
    const description = quillRef.current.root.innerHTML

    const payload = {
      title: courseTitle,
      price: coursePrice,
      discount,
      image,
      description,
      chapters,
    }

    console.log('Course submitted:', payload)
    // TODO: Send to backend here
  }

  return (
    <div className='h-screen overflow-scroll flex flex-col items-start md:p-8 p-4 pt-8 w-full'>
      <form onSubmit={submitCourse} className='w-full max-w-3xl space-y-4'>
        {/* Title */}
        <div className='flex flex-col gap-1 w-full'>
          <p>Course Title</p>
          <input
            type='text'
            placeholder='Type here'
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500'
            required
          />
        </div>

        {/* Description */}
        <div className='flex flex-col gap-1 w-full'>
          <p>Course Description</p>
          <div
            ref={editorRef}
            className='bg-white p-2 border border-gray-500 rounded min-h-[120px]'
          ></div>
        </div>

        {/* Price, Discount, Thumbnail */}
        <div className='flex flex-wrap items-center gap-6 w-full'>
          <div className='flex flex-col gap-1'>
            <p>Course Price</p>
            <input
              type='number'
              placeholder='0'
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <p>Discount %</p>
            <input
              type='number'
              placeholder='0'
              min={0}
              max={100}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
              required
            />
          </div>

          <div className='flex md:flex-row flex-col items-center gap-3'>
            <p>Course Thumbnail</p>
            <label
              htmlFor='thumbnailImage'
              className='flex items-center gap-3 cursor-pointer'
            >
              <img
                src={assets.file_upload_icon}
                alt=''
                className='p-3 bg-blue-500 rounded'
              />
              <input
                type='file'
                id='thumbnailImage'
                onChange={(e) => setImage(e.target.files[0])}
                accept='image/*'
                hidden
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt='Thumbnail Preview'
                  className='max-h-10 rounded'
                />
              )}
            </label>
          </div>
        </div>

        {/* Add Chapter */}
        <div
          onClick={openAddChapterPopup}
          className='w-full text-center bg-blue-100 py-2 rounded cursor-pointer'
        >
          + Add Chapter
        </div>

        {/* Chapters */}
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapter.id} className='bg-white border rounded-lg mb-4'>
            <div className='flex justify-between items-center p-4 border-b'>
              <div className='flex items-center'>
                <img
                  src={assets.dropdown_icon}
                  alt=''
                  width={14}
                  className={`mr-2 cursor-pointer transition-all ${
                    chapter.collapsed ? '-rotate-90' : ''
                  }`}
                  onClick={() =>
                    setChapters(
                      chapters.map((c) =>
                        c.id === chapter.id
                          ? { ...c, collapsed: !c.collapsed }
                          : c
                      )
                    )
                  }
                />
                <span className='font-semibold'>
                  {chapterIndex + 1}. {chapter.chapterTitle}
                </span>
              </div>
              <span className='text-gray-500'>
                {chapter.chapterContent.length} Lectures
              </span>
              <div className='flex items-center gap-3'>
                <button
                  type='button'
                  onClick={() => openLecturePopup(chapter.id)}
                  className='bg-green-500 text-white px-2 py-1 rounded text-sm'
                >
                  Add Lecture
                </button>
                <img
                  src={assets.cross_icon}
                  alt=''
                  className='cursor-pointer w-4'
                  onClick={() => deleteChapter(chapter.id)}
                />
              </div>
            </div>
            {!chapter.collapsed && (
              <div className='p-4 space-y-2'>
                {chapter.chapterContent.map((lecture, lectureIndex) => (
                  <div
                    key={lectureIndex}
                    className='flex justify-between items-center'
                  >
                    <span>
                      {lectureIndex + 1}. {lecture.lectureTitle} -{' '}
                      {lecture.lectureDuration} mins -{' '}
                      <a
                        href={lecture.lectureUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='text-blue-500'
                      >
                        Link
                      </a>{' '}
                      - {lecture.isPreviewFree ? 'Free Preview' : 'Paid'}
                    </span>
                    <img
                      src={assets.cross_icon}
                      alt=''
                      className='cursor-pointer w-4'
                      onClick={() => deleteLecture(chapter.id, lectureIndex)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Submit */}
        <button
          type='submit'
          className='bg-black text-white px-6 py-2 rounded'
        >
          ADD
        </button>
      </form>

      {/* Lecture Popup */}
      {showLecturePopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
          <div className='bg-white p-6 rounded shadow w-96 space-y-4'>
            <h3 className='text-lg font-semibold'>Add Lecture</h3>
            <input
              type='text'
              placeholder='Lecture Title'
              value={lectureDetails.lectureTitle}
              onChange={(e) =>
                setLectureDetails({
                  ...lectureDetails,
                  lectureTitle: e.target.value,
                })
              }
              className='w-full p-2 border rounded'
            />
            <input
              type='number'
              placeholder='Duration (min)'
              value={lectureDetails.lectureDuration}
              onChange={(e) =>
                setLectureDetails({
                  ...lectureDetails,
                  lectureDuration: e.target.value,
                })
              }
              className='w-full p-2 border rounded'
            />
            <input
              type='text'
              placeholder='Video URL'
              value={lectureDetails.lectureUrl}
              onChange={(e) =>
                setLectureDetails({
                  ...lectureDetails,
                  lectureUrl: e.target.value,
                })
              }
              className='w-full p-2 border rounded'
            />
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={lectureDetails.isPreviewFree}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    isPreviewFree: e.target.checked,
                  })
                }
              />
              <span>Free Preview</span>
            </label>
            <div className='flex justify-end gap-3'>
              <button
                type='button'
                onClick={() => setShowLecturePopup(false)}
                className='px-4 py-2 border rounded'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={addLecture}
                className='px-4 py-2 bg-blue-500 text-white rounded'
              >
                Add Lecture
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Popup */}
      {showChapterPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
          <div className='bg-white p-6 rounded shadow w-96 space-y-4'>
            <h3 className='text-lg font-semibold'>Add Chapter</h3>
            <input
              type='text'
              placeholder='Chapter Title'
              value={newChapterTitle}
              onChange={(e) => setNewChapterTitle(e.target.value)}
              className='w-full p-2 border rounded'
            />
            <div className='flex justify-end gap-3'>
              <button
                type='button'
                onClick={() => setShowChapterPopup(false)}
                className='px-4 py-2 border rounded'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={addChapter}
                className='px-4 py-2 bg-blue-500 text-white rounded'
              >
                Add Chapter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCourse
