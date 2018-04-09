import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  MultiList,
  SelectedFilters,
  ResultList
} from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="klevr-sample"
        credentials="AyMlcKaHY:55a811ce-7150-45fa-8ecb-50050ac9dc6d"
      >
        <div className="navbar">
          <DataSearch
            className="datasearch"
            componentId="mainSearch"
            dataField={["Description.search", "Description_2.search", "Description_3.search", "Description_4.search"]}
            placeholder="Vendor Products"
            innerClass={{
              "input": "searchbox",
              "list": "suggestionlist"
            }}
            autosuggest={false}
            iconPosition="left"
            filterLabel="search"
          />
        </div>
        <div className="display">
          <div className="leftSidebar">
            <MultiList
              componentId="Category_Profile"
              dataField="Category_Profile.raw"
              title="Category Profile"
              size={100}
              showCheckbox={false}
              showSearch={false}
              className="authors"
              innerClass={{
                "list": "author-list"
              }}
              filterLabel="Category"
            />

            <MultiList
              componentId="Color"
              dataField="Color_#1.raw"
              title="Colors"
              size={100}
              showCheckbox={false}
              showSearch={false}
              className="authors"
              innerClass={{
                "list": "author-list"
              }}
              filterLabel="Colors"
            />

            <MultiList
              componentId="Profile"
              dataField="Profile.raw"
              title="Profile"
              size={100}
              showCheckbox={false}
              showSearch={false}
              className="authors"
              innerClass={{
                "list": "author-list"
              }}
              filterLabel="Profile"
            />
          </div>

          <div className="mainBar">
            <SelectedFilters />
            <ResultList
              componentId="results"
              dataField="original_title"
              react={{
                "and": ["mainSearch", "Category_Profile"]
              }}
              pagination={true}
              size={30}
              onData={(res)=>(
                {
                  "title": res.Profile_Group || " ",
                  "description":  (<div style={{ lineHeight: '24px' }}>
                    <p>{res.Description}</p>
                    <p>{res.Description_2}</p>
                    <p>{res.Description_3}</p>
                  </div>),
                }
              )}
              className="result-data"
              innerClass={{
                "image": "result-image",
                "resultStats": "result-stats"
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }
}

export default App;
