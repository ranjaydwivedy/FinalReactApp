import React from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { UserDetails } from "../../components/UserDetails/UserDetails";

const User = ({ match: { params }, history }) => {
  return (
    <PageLayout>
      <UserDetails userId={params.userId} goBackFn={history.goBack} />
    </PageLayout>
  );
};

export { User };
