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

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return {
    paginatedExhibitors,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    startIndex: (currentPage - 1) * itemsPerPage + 1,
    endIndex: Math.min(currentPage * itemsPerPage, exhibitors.length),
    totalItems: exhibitors.length
  };
};

export default useExhibitorPagination;