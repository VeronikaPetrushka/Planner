import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectLoading = (state) => state.tasks.loading;

export const selectFilter = (state) => state.tasks.filter;

export const selectAllTasks = (state) => state.tasks.items;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectAllTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks");

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectAllTasks], (tasks) => {
  console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
