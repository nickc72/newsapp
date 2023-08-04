import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/digital-world-map-hologram-blue-background_1379-901.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
