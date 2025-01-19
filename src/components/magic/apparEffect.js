
export default function restall(elementRef,effect)
{
    const Effet=(effect!=null)?effect:'appar';
  if(elementRef!=null){
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementRef.current.classList.add(Effet);
          }
        });
      },
      { threshold: 0.1 } // Ajuster le seuil si nécessaire
    );
    observer.observe(elementRef.current);
  }
}