import React from 'react'
import Button from 'elements/Button'


export default function MostPicked(props) {
  return (
    <section className='container'>
        <h4 className='mb-3'>Paling banyak dicari</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                  <div className="card card-featured">
                    <div className="tag">
                      {item.price}
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.lang}
                      </span>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
    </section>
  )
}
