"use client";

import { useState } from "react";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Week 9 Assignment</h1>
      <p>
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            <p className="font-bold text-lg">
              <a href="/week-9/shopping-list">Week 9 Assignment</a>
            </p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={login}>Login with GitHub</button>
        )}
      </p>
    </main>
  );
}
