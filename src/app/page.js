'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import { fetchNews } from '@/Redux/NewsSlice';
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '@/component/NewsCard';
import Search from '@/component/Sorting';
import Navbar from '@/component/Navbar';
import Pagination from '@/component/Pagination';
import { fetchCountry } from '@/Redux/CategorySlice';
import Sorting from '@/component/Sorting';



export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('business')
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const timeoutRef = useRef(null);
  const lengthOfPost = useSelector((state) => state.news.totalResults);
  console.log(lengthOfPost, 'lenofpost')

  // pagination logic
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(lengthOfPost / itemsPerPage);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }


  useEffect(() => {
    dispatch(fetchNews(selectedCategory, searchText, currentPage, itemsPerPage))
  }, [])


  useEffect(() => {
    dispatch(fetchNews(selectedCategory, searchText, currentPage, itemsPerPage))
  }, [dispatch, selectedCategory, currentPage, itemsPerPage])



  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(fetchNews(selectedCategory, searchText));
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dispatch, selectedCategory, searchText]);


  // handling sorting
  const handleSorting = (categoryName) => {
    setSelectedCategory(categoryName)
    setCurrentPage(1)
  }

  // handling searching
  const handleSearchText = (categoryName) => {
    setSearchText(categoryName)
    setCurrentPage(1)
  }


  // light  mode and dark mode 
  useEffect(() => {
    const getModeStatus = localStorage.getItem('theme');
    console.log(getModeStatus, 'getModeStatus')
  }, [])


  // dark mode 

  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(false);
    }
  }, []);


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  //  toggling dark mode and light mode
  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  console.log(process.env.NEWS_API_KEY)


  return (
    <div className=' text-black dark:bg-black dark:text-white'>
      <div className='mt-4 px-4'>
        <Navbar handleSearchText={handleSearchText} searchText={searchText} handleToggle={handleToggle} isDarkMode={isDarkMode} />
        <div className='search flex justify-end items-center mb-3 mt-10'>
          <Sorting handleSorting={handleSorting} selectedCategory={selectedCategory} />
        </div>
        <div>
          <NewsCard isDarkMode={isDarkMode} />
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handlePrevious={handlePrevious}
          handleNextPage={handleNextPage}
          totalPages={totalPages}
        />

      </div>

    </div>
  );
}
