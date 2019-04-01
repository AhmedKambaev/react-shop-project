import React from 'react';


const News = ({news}) => {
   return (
       <div>
           {
               news.map((data) => {
                  return (
                      <div className="border border-secondary p-2 mb-3" key={data.id}>
                        <div className="media">
                            <img className="mr-2 avatar-sm rounded-circle"
                                 src="assets/images/users/user-5.jpg"
                                 alt="Generic placeholder image"/>
                            <div className="media-body">
                                <h5 className="m-0">Камбаев Ахмед</h5>
                                <p className="text-muted">
                                    <small>{data.time}</small>
                                </p>
                            </div>
                        </div>
                        <p>{data.text}</p>
                        <img src={data.image} alt="post" style={{width: 100 + '%'}}/>
                      </div>
                  )
               })
           }
       </div>
   );
};

export default News;