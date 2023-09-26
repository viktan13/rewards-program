const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h3>
                UI Developer
            </h3>
            <p>
                A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
            </p>
            <p>
                A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for
                every dollar spent over $50 in each transaction

                (e.g., a $120 purchase = 2x$20 + 1x$50 = 90 points).
            </p>
            <p>
                Given a record of every transaction during a three-month period, calculate the reward points earned for
                each customer per month and total.
            </p>
                <ul style={{listStyle: 'none'}}>
                    <li>Use React JS (do not use TypeScript)</li>

                    <li>Simulate an asynchronous API call to fetch data</li>

                    <li>Make up a data set to best demonstrate your solution</li>

                    <li>Check solution into GitHub</li>
                </ul>
        </div>
    );
};

export default Home;
