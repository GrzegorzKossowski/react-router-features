import React from 'react';

interface HomeProps {}

const Home = ({ ...restProps }: HomeProps) => {
    return (
        <>
            <h1 className='text-4xl font-bold'>Home</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dolor aut doloribus, suscipit quam voluptatibus commodi fugiat
                unde maxime omnis velit id laborum doloremque aperiam nemo! Quae
                amet quia rerum.
            </p>
        </>
    );
};

export default Home;
