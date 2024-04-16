import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, point, point2, point3, }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <span>{point}</span><br></br>
          <span>{point2}</span><br></br>
          <span>{point3}</span><br></br>
        </div>
      </div>
    </Col>
  )
}