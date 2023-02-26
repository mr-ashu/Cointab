import { Button } from "@chakra-ui/react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange,color }) {
  let pages = createArrayOfSize(totalPages).map((a, i) => (
    <Button
       
      onClick={() => handlePageChange(i + 1)
    
    }
      disabled={currentPage === i + 1}
      key={i + 1}
      data-testid="page-btn"
    >
      {i + 1}
    </Button>
  ));
  return <div  >{pages}</div>;
}

export default Pagination;
