import { Express, Request, Response } from "express";
import mongodb from './src/models/mongodb';
import server from "./src/server";
import config from "./src/config/keys";
import express = require("express");
import http = require("http");
import path = require("path");

const port = config.port
const httpPort = process.env.PORT || port;


class Main {
    public static start() {
        const app: Express = express();

        //Call Client side request 
        var httpServer = http.createServer(app);
        //listen on provided ports
        httpServer.listen(httpPort);
        //add error handler
        httpServer.on("error", this.onError);
        //start listening on port
        httpServer.on("listening", () => {
            mongodb.connection().then((connection: any) => {
                if (connection == true) {
            new server(app);
            var addr: any = httpServer.address();
            var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
            console.log("Start Start " + bind);
                } else {
                    console.log("Database connection failed....");
                }
            });
        });

    }

    public static onError(error: any) {
        if (error.syscall !== "listen") {
            throw error;
        }

        var bind = typeof httpPort === "string"
            ? "Pipe " + httpPort
            : "Port " + httpPort;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case "EACCES":
                console.error(bind + " requires elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(bind + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}

Main.start();

