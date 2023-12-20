#!/usr/bin/env python3
import flask, os, sys, random, re, json

def tryopen(filename,mode='r',return_file_contents=False):
  try:
    return open(filename, mode) if not return_file_contents else open(filename, mode).read()
  except:
    return None
  
def tryint(a):
  try: e = int(a)
  except: e = None
  return True if type(e) == int else False

server = flask.Flask('locally-hosted-pisft-service', template_folder="assets/html", static_folder="assets/static/", static_url_path="/static")
port = tryopen('./portfile', 'r', return_file_contents=True) or 80482

if not tryint(port):
  print("Error : port number could not be converted to integer")
  raise ValueError("Port number could not be converted to integer. Invalid port.")
if len(str(port)) >= 5:
  print("WARNING : port number is more than 5 characters, selecting random port number.")

@server.route('/')
def home():
  return flask.render_template('home.html')

@server.route('/get/paths')
def getpathcontent():
  only_directories = flask.request.headers.get('only_dirs') or False
  path = flask.request.headers.get('path')
  if not path or path == "null": return flask.jsonify({"error": "path not specified"})
  end = []
  try:
    for i in os.listdir(path):
      if only_directories:
        if os.path.isdir(path+i):
          end.append(i)
        else: pass
      else:
        end.append({"name": i, "is": "directory" if os.path.isdir(path+i) else "file"})
    return flask.jsonify(end)
  except: return flask.jsonify({"error": "The directory does not exist or is invalid."})


server.run(
  port=int(port), debug=True
)
