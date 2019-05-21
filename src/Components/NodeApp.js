import React, { Component } from 'react'
import Axios from 'axios';
import TableData from './Table';
import Header from './Header';

export default class NodeApp extends Component {
    state = {
        inputText: "",
        error: null,
        disabled: false,
        fetchedData: [],
        loading: false,
        update: false,
        updateId: null,
        updateText: ""
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        this.setState({ loading: true })
        Axios.get("your api url")
            .then(res => {
                const fetchedData = []
                for (let keys in res.data) {
                    fetchedData.push(
                        {
                            name: res.data[keys].name,
                            date: res.data[keys].date,
                            id: keys
                        }
                    )
                }
                this.setState({ fetchedData, loading: false })
            })
            .catch(err => {
                this.setState({ error: err, loading: false })
            })
    }
    handlePostData = () => {
        this.setState({ disabled: true })
        if (this.state.inputText) {
            const data = {
                name: this.state.inputText,
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
            }
            Axios.post("your api url", data)
                .then(res => {
                    this.setState({ disabled: false, inputText: "" })
                    console.log("posted successfully");
                    window.location.reload();
                })
                .catch(err => {
                    this.setState({ error: err, disabled: false, inputText: "" })
                })
        } else {
            alert("Please enter something")
            this.setState({ disabled: false })
        }
    }
    handleOnCHnage = event => this.setState({ inputText: event.target.value.trimStart() });


    handleDelete = data => {
        Axios.delete(`"your api url"${data.id}.json`)
        let fetchedDataCopy = this.state.fetchedData
        for (let i = 0; i < fetchedDataCopy.length; i++) {
            let copyData = fetchedDataCopy[i]
            if (copyData.id === data.id) {
                fetchedDataCopy.splice(i, 1)
                break;
            }
        }
        this.setState({ fetchedData: fetchedDataCopy })
    }

    handleUpdate = data => {
        this.setState({ update: true, updateId: data.id, inputText: data.name, updateText: data.name })
    }

    handleSubmit = id => {
        this.setState({ disabled: true })
        if (this.state.inputText) {
            const data = {
                name: this.state.inputText,
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
            }
            Axios.put(`"your api url"/${id}.json`, data)
                .then(res => {
                    this.setState({ disabled: false, inputText: "", update: false, updateId: null, updateText: "" })
                    console.log("posted successfully")
                    window.location.reload();
                })
                .catch(err => {
                    this.setState(
                        {
                            error: err,
                            disabled: false,
                            inputText: "",
                            update: false,
                            updateId: null,
                            updateText: ""
                        }
                    )
                })
        } else {
            alert("Please enter something")
        }
    };
    handleCancel = () => {
        this.setState({ inputText: "", update: false, updateId: null, updateText: "" })
    }
    render() {
        const { inputText, disabled, fetchedData, loading, update, updateId } = this.state;
        return (
            <div className="container-fluid">
                <Header />
                <div className="jumbotron py-3 mt-3">
                    <h1 className="text-center">CRUD operations</h1>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="was-validated">
                                        <input
                                            className="form-control"
                                            placeholder="add subject"
                                            value={inputText}
                                            onChange={this.handleOnCHnage}
                                            required
                                        />
                                        <div className="valid-feedback">Valid.</div>
                                        <div className="invalid-feedback">Please add somthing</div>
                                    </div>

                                </div>
                                <div className="col-md-2 p-0">
                                    {update ?
                                        <span>
                                            <button disabled={inputText === this.state.updateText} className="btn btn-success" onClick={() => this.handleSubmit(updateId)}>
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </button>
                                            <button disabled={disabled} className="btn btn-danger ml-1" onClick={this.handleCancel}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </span>
                                        :
                                        <button disabled={disabled} className="btn btn-primary" onClick={this.handlePostData}>Add</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-5">
                        <TableData
                            data={fetchedData}
                            loading={loading}
                            handleDelete={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                        />
                    </div>
                </div>
            </div>
        )
    }
};
