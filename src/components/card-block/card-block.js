import React from 'react';


class CardBlock extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <tbody>
                {
                    data.map((obj) => {
                        return (
                            <tr key={obj.id}>
                                <td>
                                    <img
                                        src={obj.image}
                                        alt="product-img" height="32"/>
                                </td>
                                <td>
                                    {obj.title}
                                </td>
                                <td>
                                    <small className="text-muted">
                                        {obj.time}
                                    </small>
                                </td>
                                <td>
                                    {obj.total}
                                </td>
                                <td>
                                    <h5><span className="badge badge-info">Добавлено</span></h5>
                                </td>
                                <td>
                                    <button className="action-icon btn btn-secondary waves-effect waves-light"> <i
                                        className="mdi mdi-square-edit-outline"></i></button>
                                    <button onClick={() => this.props.deleteCardBlock(obj.id)} className="action-icon btn btn-secondary waves-effect waves-light" style={{marginLeft: 5 + 'px'}}> <i
                                        className="mdi mdi-delete"></i></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        );
    }
};


export default CardBlock;