# RestExpress

by Charlie Calvert

Navigate to the root of the root of the project:

In one bash shell: **npm run build**

In the other: **npm start**

## Install

```bash
 npm install --save-dev @testing-library/react @testing-library/dom
 npm install --save-dev jest
```

## CSS to Center Horizontally and Vertically

```css
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    text-align: center;
    flex-direction: column;
}
```

## CSS to Center Horizontally but not Vertically

```css
.center-container {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}
```
