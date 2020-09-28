<?php namespace App\Controllers;

use CodeIgniter\Controller;

class Pages extends Controller
{
    public function index()
    {
        $data['header'] = view('templates/home-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/home-top_menu');
        $data['footer'] = view('templates/home-footer');

        echo view('home', $data);
    }

    public function about(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('about');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function view($page = 'home')
    {
        if ( ! is_file(APPPATH.'/Views/pages/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        }

        $data['title'] = ucfirst($page); // Capitalize the first letter

        echo view('templates/header', $data);
        echo view('pages/'.$page, $data);
        echo view('templates/footer', $data);
    }
}