import { Col } from "react-bootstrap"

export const ProductCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="prod-imgbx">
                <img src={imgUrl} />
                <div className="prod-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}