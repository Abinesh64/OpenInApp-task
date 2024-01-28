import React, { useState } from 'react'
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css'
import "./Table.css"

const Table = ({data}) => {
    const [selectedTags, setSelectedTags] = useState(Array(data.length).fill(''));

    const handleOnChange = (val, index) => {
        const updatedSelectedTags = [...selectedTags];
        updatedSelectedTags[index] = val;
        setSelectedTags(updatedSelectedTags);
      };
  
    const  options  = [
      { label:  'Technology', value:  'Technology'  },
      { label:  'Fashion', value:  'Fashion'  },
      { label:  'Food', value:  'Food'  },
      { label:  'Travel', value:  'Travel'  },
      { label:  'Sports', value:  'Sports'  },
      { label:  'Music', value:  'Music'  },
      { label:  'Art', value:  'Art'  },
      { label:  'Health', value:  'Health'  },
      { label:  'Education', value:  'Education'  },
      { label:  'Finance', value:  'Finance'  },
    ]
  
  return (
    <div className='table'>
        <h2>Uploads</h2>
        <table>
            <thead className='table-header'>
                <tr>
                    <th>ID</th>
                    <th>Links</th>
                    <th>Prefix</th>
                    <th>Select tags</th>
                    <th>Selected tags</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, index)=>
                    (
                        <div className='table-content' key={index}>
                        <tr >
                            <td>{row.id}</td>
                            <td>
                                <a href={row.links} target='_blank' rel='noopener noreferrer'>
                                    {row.links}
                                </a>
                            </td>
                            <td>{row.prefix}</td>
                            <td>
                                <MultiSelect 
                                    onChange={(val) => handleOnChange(val, index)} 
                                    options={options} 
                                />
                            </td>
                            <td className='selected-tags'>{selectedTags[index]}</td> 
                        </tr>
                        </div>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table