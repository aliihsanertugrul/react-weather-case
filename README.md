# Weather App

Hava durumu uygulamasını ReactJS kullanılarak geliştirdiğim bu projemde stil için Tailwind CSS kullandım. Şehir verileri çekilirken, iki farklı API'ye bağlandım. İlk API, sorguya göre en yakın şehirin adını getirirken, bu şehrin bana verdiği enlem ve boylam değerleriyle ikinci API'ye bağlandım ve o şehrin hava durumu verilerini çektim. Kullanıcı tarafından inputa girilen her bir harf için API'ye istek göndermemesi için debounce tekniğini kullandım ve belirli bir süre sonra girilen değerlerle API'ye istek gönderildi. Ayrıca, projemde moment.js, react-icons ve use-debounce gibi kütüphaneleri kullandım.

(A weather app was built using ReactJS and styled with Tailwind CSS. When fetching city data, two APIs were connected. The first API retrieves the name of the nearest city based on the query, and then using the latitude and longitude values of that city, the app connects to the second API to fetch weather data for that city. To prevent making API requests for every single character typed into the input field, I implemented the debounce technique, where requests are sent to the API after a certain delay following the input. Additionally, I used libraries such as Moment.js, React Icons, and use-debounce in the project.)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
