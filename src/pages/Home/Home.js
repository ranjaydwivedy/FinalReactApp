import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";

const Home = () => (
  <PageLayout>
    <h1>Welcome</h1>
    <p>
      This is the final project for the John Deere Front End Training Course
    </p>
    <p>
      Here you will find a list of users being loaded up to the Redux store.
      There is an ability to paginate through all the users, as well as a search
      feature to find the user you are looking for.
    </p>
  </PageLayout>
);

export { Home };
