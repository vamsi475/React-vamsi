import React from 'react';

const TableData = (props) => {
    const { data, handleDelete, loading, handleUpdate } = props;
    return (
        <React.Fragment>
            <div className="card card-body">
                <table className="table table-bordered mb-0">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map(val => <tr key={val.id}>
                                <td>{val.name}</td>
                                <td>{val.date}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger mr-2" onClick={() => handleDelete(val)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                    <button className="btn btn-sm btn-primary" onClick={() => handleUpdate(val)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    loading && <div className="text-center">
                        <span className="spinner-border text-primary text-center">
                        </span>
                    </div>}
            </div>
        </React.Fragment>
    )
};
export default TableData;