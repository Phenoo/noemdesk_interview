import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { BiSearch } from 'react-icons/bi';

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [previousSearches, setPreviousSearches] = useState([]);
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Load previous search words from local storage
    const storedSearches = localStorage.getItem('previousSearches');
    if (storedSearches) {
      setPreviousSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    // Save previous search words to local storage
    localStorage.setItem('previousSearches', JSON.stringify(previousSearches));
  }, [previousSearches]);

  const handleInputChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleInputFocus = () => {
    setShow(true);
  };

  const handleInputBlur = () => {
    setShow(false);
  };

  const handlePreviousSearchClick = (previousSearch: string) => {
    setSearchInput(previousSearch);
    setShow(false)
  };

  return (
    <div className='relative'>
      <Input
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}  
        className='outline-none border-none px-8 w-60 placeholder:text-gray-600'
        />
        <div className='absolute top-2 bg-white left-2'>
             <BiSearch size={24} color="#111"  />
        </div>
      {show && previousSearches.length > 0 && (
        <div className='h-auto py-2 w-52 bg-white absolute'>
          <ul className='w-full'>
            {previousSearches.map((previousSearch, index) => (
              <li
                key={index}
                onClick={() => handlePreviousSearchClick(previousSearch)}
                className='border-b'
              >
                {previousSearch}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
