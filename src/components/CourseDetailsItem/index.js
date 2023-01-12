import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-details-card">
      <div className="course-details-container">
        <img className="course-image" src={imageUrl} alt={name} />
        <div className="course-info-container">
          <h1 className="course-title">{name}</h1>
          <p className="course-description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
