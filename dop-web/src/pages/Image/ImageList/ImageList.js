import React, { Component } from 'react';
import {Breadcrumb} from '@icedesign/base';
import ImagePagination from './ImagePagination'
import API from "../../API";
import Axios from "axios";

export default class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namespaceId:"",
            repoName:props.location.pathname.split("/")[2]+"/"+props.location.pathname.split("/")[3]
        };
    }

    init(){
        let url = API.image + '/v1/projects';
        let _this = this;
        Axios.get(url,{
            params:{
                name:this.props.location.pathname.split("/")[2]
            }
        }).then(
            function (response) {
                console.log(response.data)
                _this.setState({
                    namespaceId:response.data.contents[0].projectId
                })
            }
        )
    }


    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{marginBottom: "10px"}}>
                    <Breadcrumb.Item link="#/image/projects">命名空间列表</Breadcrumb.Item>
                    <Breadcrumb.Item link={"#/image/projects/"+this.state.namespaceId+"/repos"}>镜像仓库列表</Breadcrumb.Item>
                </Breadcrumb>
                <ImagePagination repoName={this.state.repoName}/>
            </div>
        )
    };

}
