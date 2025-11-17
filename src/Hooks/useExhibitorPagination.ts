// hooks/useExhibitorPagination.ts
import { useState, useMemo } from 'react';
import { Exhibitor } from '../Data/ExhibitorData';

export const useExhibitorPagination = (exhibitors: Exhibitor[], itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedExhibitors = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return exhibitors.slice(startIndex, startIndex + itemsPerPage);
  }, [exhibitors, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(exhibitors.length / itemsPerPage);

  return {
    paginatedExhibitors,
    currentPage,
    totalPages,
    setCurrentPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  };
};