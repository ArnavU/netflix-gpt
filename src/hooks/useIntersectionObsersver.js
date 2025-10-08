import React from 'react'

const useIntersectionObsersver = () => {
  
	useEffect(() => {
		// Create a new IntersectionObserver
		const observer = new IntersectionObserver((entries) => {
			// Loop over the entries
			entries.forEach((entry) => {
				// If the element is intersecting (i.e., in the viewport)
				if (entry.isIntersecting) {
					// Run your function here
					console.log("Element is in viewport");
					setPageN
				}
			});
		});
	
		// Select the element you want to observe
		const targetElement = document.querySelector(".secondShimmer");
	
		// Start observing the target element
		observer.observe(targetElement);

	}, [])

}

export default useIntersectionObsersver