import React from 'react'
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

const User = ({title, content, image, handleName}) => {
    // const {image, title, content} = props
    return (
        <div>
            <Card style={{ width: '18rem' }} onClick={() =>handleName(title)}>
                <Card.Img variant="top" src={image} style={{width:"250px", height:"250px"}}/>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {content}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

User.propTypes ={
    title: PropTypes.string    //isRequired returns an error in the view if type is not a match
}

User.defaultProps = {
    title : "This is a title",
    image: "https://image.freepik.com/vecteurs-libre/avatar-femme-reseau-social-conception-medias_24877-17890.jpg"
}
export default User
