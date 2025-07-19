// // client/src/components/student/CourseCard.jsx

// import React, { useContext } from 'react';
// import { AppContext } from '../../context/AppContext';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';

// const CourseCard = ({ course }) => {
//   const { currency,calculateRating} = useContext(AppContext);
//   const discountedPrice = (
//     course.coursePrice -
//     (course.discount * course.coursePrice) / 100
//   ).toFixed(2);

//   return (
//     <Link
//       to={'/course/' + course._id}
//       onClick={() => scrollTo(0, 0)}
//       className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
//     >
//       <img
//         className='w-full'
//         src={course.courseThumbnail}
//         alt={course.courseTitle}
//       />
//       <div className="p-3 text-left">
//         <h3 className="text-base font-semibold">{course.courseTitle}</h3>
//         <p className="text-gray-500">{course.educator.name}</p>
//         <div className="flex items-center gap-2 mt-2">
//           <p className="text-yellow-500 font-medium">
//   {course.rating ?? calculateRating(course)}
// </p>
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <img key={i} src={i<Math.floor(calculateRating(course))? assets.star:assets.star_blank} alt="star" className="w-3.5 h-3.5" />
//             ))}
//           </div>
//           <p className="text-sm text-gray-500">
//   ({course.reviewCount || course.courseRatings.length})
// </p>
//         </div>
//         <p className="mt-2 text-blue-600 font-semibold">
//           {currency}{discountedPrice}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default CourseCard;
// client/src/components/student/CourseCard.jsx

import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  const discountedPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className='w-42 border border-gray-500/30 pb-6 overflow-hidden rounded-lg flex-shrink-0'
    >
      <img
        className='w-full h-34 object-cover'
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">GreatStack</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-yellow-500 font-medium">
            {course.rating ?? calculateRating(course)}
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="star"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">
            ({course.reviewCount || course.courseRatings.length})
          </p>
        </div>
        <p className="mt-2 text-blue-600 font-semibold">
          {currency}{discountedPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;

