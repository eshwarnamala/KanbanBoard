import React from 'react';
import './FilterOptions.css';

const FilterOptions = ({ grouping, onGroupingChange, sorting, onSortingChange }) => {
  return (
    <div className="filter-options">
      <div className="filter-group">
        <label htmlFor="grouping">Grouping</label>
        <select id="grouping" value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="filter-sort">
        <label htmlFor="sorting">Ordering</label>
        <select id="sorting" value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
