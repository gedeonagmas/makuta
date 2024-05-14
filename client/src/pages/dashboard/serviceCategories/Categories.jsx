import React, { useContext } from "react";
import CategoryItems from "./CategoryItems";
import {
  Article,
  Dashboard,
  Gavel,
  People,
  Person,
  PostAdd,
} from "@mui/icons-material";
import { mobileContext } from "../HomeDashboard";

const Categories = () => {
  const context = useContext(mobileContext);
  const role = context.role;
  return (
    <div className="grid h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <CategoryItems
        title={`${role === "super-admin" ? "Service area" : "Active cases"}`}
        icon={
          role === "super-admin" ? (
            <Dashboard fontSize="small" />
          ) : role === "representative-main" ? (
            <Article fontSize="small" />
          ) : (
            <PostAdd fontSize="small" />
          )
        }
        number={20}
        description={`${role === "super-admin" ? "total area" : "total cases"}`}
        color="#0000FF"
        textColor="text-blue-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      />

      <CategoryItems
        title={`${role === "super-admin" ? "Cases" : "Closed cases"}`}
        icon={
          role === "super-admin" ? (
            <Dashboard fontSize="small" />
          ) : role === "representative-main" ? (
            <Article fontSize="small" />
          ) : (
            <PostAdd fontSize="small" />
          )
        }
        number={20}
        description="total cases"
        color="#008000"
        textColor="text-green-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      />

      <CategoryItems
        title={`${role === "lawyer" ? "Customers" : "Lawyers"}`}
        icon={
          role === "lawyer" ? (
            <People fontSize="small" />
          ) : (
            <Person fontSize="small" />
          )
        }
        number={20}
        description={`${
          role === "lawyer" ? "total customers" : "total lawyers"
        }`}
        color="#FFA500"
        textColor="text-yellow-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      />

      <CategoryItems
        title={`${
          role === "customer"
            ? "Current balance"
            : role === "lawyer"
            ? "Representatives"
            : "Customers"
        }`}
        icon={
          role === "lawyer" ? (
            <People fontSize="small" />
          ) : (
            <Person fontSize="small" />
          )
        }
        number={200}
        description={role === "lawyer" ? "representatives" : "customers"}
        color="#FF0000"
        textColor="text-red-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      />

      {/* <CategoryItems
        title="Cases"
        icon={<Article fontSize="small" />}
        number={42}
        description="total cases"
        color="#008000"
        textColor="text-green-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      />

      <CategoryItems
        title="Lawyers"
        icon={<Gavel fontSize="small" />}
        number={56}
        description="total lawyers"
        color="#FF0000"
        textColor="text-red-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      />

      <CategoryItems
        title={`${role === "customer" ? "Representatives" : "customers"}`}
        icon={<People fontSize="small" />}
        number={200}
        description="total users"
        color="#FFA500"
        textColor="text-yellow-500"
        data={[
          26, 27, 28, 29, 25, 25, 33, 34, 27, 24, 23, 25, 27, 25, 26, 37, 24,
          23, 25, 27, 25, 26, 27, 24, 33, 25, 27, 25, 26, 27,
        ]}
      /> */}

      {/* <CategoryItems
        title="Representatives"
        icon={<SupervisorAccount fontSize="small" />}
        number={40}
        description="total representatives"
        color1="text-pink-500"
        color2="bg-pink-100"
      />

      <CategoryItems
        title="Revenue"
        icon={<Money fontSize="small" />}
        number={" $" + 2000}
        description="dollar"
        color1="text-indigo-500"
        color2="bg-indigo-100"
      /> */}
    </div>
  );
};

export default Categories;
