#!/usr/bin/env python3
import flask, os, sys, random, re, json

server = flask.Flask('locally-hosted-pisft-service', template_folder="assets/html")

@server.route('/')
def home():
  return render_template('home.html')

server.run(
  port=(open('./portfile').read() or 80482)
)
