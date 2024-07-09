import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
   
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/items')
      .then((response) => {
        setItems(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-2 font-mono'>Items List</h1>
        <Link to='/items/create'>
          <MdOutlineAddBox className='text-green-500 text-4xl  hover:bg-green-200' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Seller</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Object</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Price</th>
              <th className='border border-slate-600 rounded-md'>buy</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                <td className='border border-slate-700 rounded-md text-center'>{item.seller}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{item.object}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>rs .{item.price}</td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                  <Link to={``}>
                  < h1 className='text-md px-2  text-white bg-black rounded-lg m-1  hover:text-black hover:bg-green-500  hover:shadow-black hover:shadow-md' > buy now </h1>
                </Link>
                    
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
