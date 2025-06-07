export const fetchContextualInfo = async (url) => {
    try {
      const response = await fetch(`http://localhost:3000/api/contextual-info?url=${encodeURIComponent(url)}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar informações contextuais');
      }
      const data = await response.json();
      return data.contextualizedInfo;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  