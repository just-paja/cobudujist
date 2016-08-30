import React, { PropTypes } from 'react';

const { bool, object, string } = PropTypes;

const Html = ({
  appCssFilename,
  bodyHtml,
  isProduction,
  helmet,
}) => {
  // Only for production. For dev, it's handled by webpack with livereload.
  const linkStyles = isProduction &&
    <link href={`/build/${appCssFilename}`} rel="stylesheet" />;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width" name="viewport" />
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
        {linkStyles}
        <link rel="manifest" href="manifest.json" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        />
      </head>
      <body dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </html>
  );
};

Html.propTypes = {
  appCssFilename: string.isRequired,
  bodyHtml: string.isRequired,
  helmet: object.isRequired,
  isProduction: bool.isRequired,
};

export default Html;
