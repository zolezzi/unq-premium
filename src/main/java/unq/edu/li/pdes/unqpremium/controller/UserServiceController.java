package unq.edu.li.pdes.unqpremium.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import unq.edu.li.pdes.unqpremium.dto.JwtResponseDTO;
import unq.edu.li.pdes.unqpremium.dto.UserDTO;
import unq.edu.li.pdes.unqpremium.service.impl.UserServiceImpl;

@RestController("user")
@Api(value = "User service")
@RequestMapping("")
@RequiredArgsConstructor
public class UserServiceController {

	private final UserServiceImpl service;
	
    @ApiOperation(
            value = "Service that return an user with token access",
            notes = "This service returns an user with token access",
            nickname = "login",
            response = JwtResponseDTO.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded.", response = JwtResponseDTO.class),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 500, message = "Internal server error.", response = JwtResponseDTO.class) })
    @PostMapping(
            value = "/login",
            produces = { "application/json" },
            consumes = {"application/json"}
    )
    public JwtResponseDTO login(@RequestBody UserDTO user){
        return service.login(user);
    }
}
