function status(request, response) {
  response.status(200).json({
    messagem: "success",
  });
}

export default status;
