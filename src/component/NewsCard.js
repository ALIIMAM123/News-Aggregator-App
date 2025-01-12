import React from 'react'
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

function covertDate(dateString) {
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return formattedDate
}

const NewsCard = () => {
    const loading = useSelector((state) => state.news.status == 'loading');
    const post = useSelector((state) => state.news.article);

    return (



        <div className="flex flex-wrap justify-center md:justify-start   w-full  text-black dark:bg-black dark:text-white">
            {loading ? (
                <Spinner />
            ) : (
                post.map((eachItem, index) => (
                    <div
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 md:px-4 mb-4"
                        key={index}
                    >
                        <div className="rounded overflow-hidden shadow-lg">
                            <img
                                className="object-cover h-40 w-full"
                                src={eachItem.urlToImage}
                                alt="Image not Available"
                            />
                            <div className="px-3 py-2">
                                <div className="font-bold text-sm mb-1 truncate">
                                    {eachItem.author}
                                </div>
                                <p className="text-gray-700 text-sm truncate">
                                    {eachItem.title}
                                </p>
                                <p className="text-gray-700 text-xs truncate">
                                    {eachItem.content}
                                </p>
                            </div>
                            <div className="px-3 pt-1 pb-1">
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
                                    {eachItem.source.name}
                                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
                                    {covertDate(eachItem.publishedAt)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>





    )
}

export default NewsCard