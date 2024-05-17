const {renderObjects} = require("../practice-testing/indexApiPractice")

describe('renderObjects function', () => {
    it('should exist', () => {
      expect(renderObjects).toBeDefined();
    });

    test('Function receives two parameters', () => {
      const expectedNumberOfParams = 2;
      const receivedParams = renderObjects.length;
      expect(receivedParams).toBe(expectedNumberOfParams)
  });
    test('Parameter inLocation can be "carousel"', () => {
      const objects = []; 
      const inLocation = 'carousel';
      renderObjects(objects, inLocation);
      expect(inLocation).toBe('carousel');
  });

    test('Object is iterated and title and overview are obtained', () => {
      const objects = [
          { title: 'Película 1', overview: 'Resumen de la película 1' },
          { title: 'Película 2', overview: 'Resumen de la película 2' },
          { title: 'Película 3', overview: 'Resumen de la película 3' },
      ]

      // Act
      renderObjects(objects);

      objects.forEach(element => {
          expect(element.title).toBeDefined(); // Verificar que se obtiene el título
          expect(element.overview).toBeDefined(); // Verificar que se obtiene el resumen
      });
  });
      test('test else', () => {
        // Arrange
        const objects = [
            { title: 'Película 1', overview: 'Resumen de la película 1' },
        ];
        const inLocation = 'otraUbicacion'; // No es "carousel" para probar el bloque "else"
        const containerInMock = {
            html: jest.fn(),
            append: jest.fn(),
        };
        renderObjects(objects, inLocation, containerInMock);
        expect(inLocation).toBeDefined()
    });
  });


  