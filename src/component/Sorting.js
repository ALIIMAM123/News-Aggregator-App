

'use client'

const categories = [
    { id: 1, name: 'business' },
    { id: 2, name: 'entertainment' },
    { id: 3, name: 'general' },
    { id: 4, name: 'health' },
    { id: 5, name: 'science' },
    { id: 6, name: 'sports' },
    { id: 7, name: 'technology' }
];



const Sorting = ({ handleSorting, selectedCategory }) => {
    return (
        <div className="flex justify-end w-64 pr-2 md:pr-4  text-black dark:bg-black dark:text-white">
            <select
                onChange={(e) => handleSorting(e.target.value)}

                id="countries"
                className="flex w-full items-center rounded-md bg-white pl-3 py-2.5 pr-3 outline outline-1 -outline-offset-1 outline-gray-300  text-black dark:bg-black dark:text-white"
            >
                {categories.map((category) => (
                    <option key={category.id} value={category.code}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Sorting;
